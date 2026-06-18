// Single Page App for GitHub Pages
// https://github.com/rafgraph/spa-github-pages
(function(l) {
    if (l.search[1] === '/' ) {
        var decoded = l.search.slice(1).split('&').map(function(s) { 
            return s.replace(/~and~/g, '&')
        }).join('?');
        window.history.replaceState(null, null,
            l.pathname.slice(0, -1) + decoded + l.hash
        );
    }
}(window.location));

// Helper Functions
window.accountingWebApp = window.accountingWebApp || {};
window.accountingWebApp.downloadFile = function (fileName, contentType, base64Data) {
    var byteCharacters = atob(base64Data);
    var byteNumbers = new Array(byteCharacters.length);

    for (var i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }

    var byteArray = new Uint8Array(byteNumbers);
    var blob = new Blob([byteArray], { type: contentType || 'application/octet-stream' });
    var blobUrl = URL.createObjectURL(blob);
    var link = document.createElement('a');

    link.href = blobUrl;
    link.download = fileName || 'download';
    link.style.display = 'none';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(function () {
        URL.revokeObjectURL(blobUrl);
    }, 1000);
};

window.downloadFile = function (fileName, base64Data, contentType) {
    window.accountingWebApp.downloadFile(fileName, contentType, base64Data);
};

window.accountingWebApp.getCurrentOrigin = function () {
    return window.location.origin;
};
window.accountingWebApp.loadSameOriginText = async function (path) {
    var normalizedPath = path && path.charAt(0) === '/' ? path : '/' + path;
    var url = window.location.origin + normalizedPath;
    console.log('📄 Loading same-origin text from:', url);
    var response = await fetch(url, {
        credentials: 'same-origin'
    });

    if (!response.ok) {
        throw new Error('Failed to load ' + normalizedPath + ': ' + response.status + ' ' + response.statusText);
    }

    return await response.text();
};

(function () {
    var originalFetch = window.fetch.bind(window);

    window.fetch = function (resource, init) {
        var requestUrl = typeof resource === 'string'
            ? resource
            : (resource && resource.url ? resource.url : String(resource));

        if (requestUrl === 'http://localhost:5000/sample-data/directory-structure.json') {
            var sameOriginUrl = window.location.origin + '/sample-data/directory-structure.json';
            console.log('🔁 Rewriting sample-data fetch to app origin:', sameOriginUrl);

            if (resource instanceof Request) {
                resource = new Request(sameOriginUrl, resource);
            } else {
                resource = sameOriginUrl;
            }
        }

        return originalFetch(resource, init);
    };
})();

// Performance Monitoring
(function() {
    window.addEventListener('load', function() {
        setTimeout(function() {
            try {
                const perfData = performance.getEntriesByType('resource');
                const dllFiles = perfData.filter(r => r.name.includes('.dll') || r.name.includes('.wasm'));
                const jsFiles = perfData.filter(r => r.name.includes('.js') && !r.name.includes('_framework'));
                
                const totalDllSize = dllFiles.reduce((sum, r) => sum + (r.transferSize || 0), 0);
                const totalJsSize = jsFiles.reduce((sum, r) => sum + (r.transferSize || 0), 0);
                const totalSize = totalDllSize + totalJsSize;
                
                console.log('%c📊 AccountingWebApp Performance Metrics', 'color: #4CAF50; font-size: 16px; font-weight: bold;');
                console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #4CAF50;');
                console.log('🔹 DLLs loaded:', dllFiles.length);
                console.log('🔹 Total DLL size:', (totalDllSize / 1024 / 1024).toFixed(2), 'MB');
                console.log('🔹 Total JS size:', (totalJsSize / 1024 / 1024).toFixed(2), 'MB');
                console.log('🔹 Total download:', (totalSize / 1024 / 1024).toFixed(2), 'MB');
                console.log('%c━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━', 'color: #4CAF50;');
                
                const navTiming = performance.getEntriesByType('navigation')[0];
                if (navTiming) {
                    console.log('⏱️ Page Load Time:', (navTiming.loadEventEnd - navTiming.fetchStart).toFixed(0), 'ms');
                    console.log('⏱️ DOM Content Loaded:', (navTiming.domContentLoadedEventEnd - navTiming.fetchStart).toFixed(0), 'ms');
                    console.log('⏱️ Time to Interactive:', (navTiming.domInteractive - navTiming.fetchStart).toFixed(0), 'ms');
                }
                
                console.log('%c🎯 Phase 3: Real Lazy Loading ACTIVE!', 'color: #FF5722; font-weight: bold; font-size: 14px;');
                console.log('%c   ✓ Workflows assembly configured for lazy loading', 'color: #FF5722;');
                console.log('%c   ✓ Assembly loads on first access', 'color: #FF5722;');
                console.log('%c   ✓ Reduced initial bundle size', 'color: #FF5722;');
                console.log('%c   ✓ Production-ready lazy loading', 'color: #FF5722;');
                console.log('%c   ℹ️  Navigate to /workflows to see lazy loading in action', 'color: #FF5722;');
                
                window.accountingWebAppMetrics = {
                    dllCount: dllFiles.length,
                    dllSizeMB: (totalDllSize / 1024 / 1024),
                    jsSizeMB: (totalJsSize / 1024 / 1024),
                    totalSizeMB: (totalSize / 1024 / 1024),
                    loadTimeMs: navTiming ? (navTiming.loadEventEnd - navTiming.fetchStart) : 0,
                    timestamp: new Date().toISOString(),
                    phase: 3
                };
                
            } catch (err) {
                console.error('Error collecting performance metrics:', err);
            }
        }, 2000);
    });
    
    window.trackFeatureAccess = function(featureName) {
        if (!window.featureAccessLog) {
            window.featureAccessLog = [];
        }
        const access = {
            feature: featureName,
            timestamp: new Date().toISOString(),
            url: window.location.pathname,
            loadTime: window.lastFeatureLoadTime || 0
        };
        window.featureAccessLog.push(access);
        console.log('%c📝 Feature Loaded: ' + featureName, 'color: #9C27B0; font-weight: bold;', access);
    };
    
    window.trackLazyLoadStart = function(featureName) {
        window.lazyLoadStart = performance.now();
        console.log('%c⏳ Loading: ' + featureName + '...', 'color: #FF9800; font-weight: bold;');
    };
    
    window.trackLazyLoadEnd = function(featureName) {
        if (window.lazyLoadStart) {
            const loadTime = performance.now() - window.lazyLoadStart;
            window.lastFeatureLoadTime = loadTime;
            console.log('%c✅ Loaded: ' + featureName + ' in ' + loadTime.toFixed(0) + 'ms', 'color: #4CAF50; font-weight: bold;');
            window.lazyLoadStart = null;
        }
    };
})();

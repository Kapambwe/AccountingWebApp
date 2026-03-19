# Accounting As A Service - Sample Data Index

## Overview

This directory contains sample accounting and operational data for 11 major Zambian companies across various industries. Each company folder contains identical JSON service file structures with industry-specific customizations.

## Quick Navigation

### 📊 By Industry

**Mining:**
- [Konkola Copper Mines PLC](./konkola-copper-mines-plc/) - Chingola, Copperbelt
- [Mopani Copper Mines PLC](./mopani-copper-mines-plc/) - Kitwe, Copperbelt

**Agriculture:**
- [National Milling Corporation](./national-milling-corporation/) - Lusaka
- [Zambia Sugar PLC](./zambia-sugar-plc/) - Nakambala
- [Zambeef Products PLC](./zambeef-products-plc/) - Lusaka

**Manufacturing:**
- [Zambian Breweries PLC](./zambian-breweries-plc/) - Lusaka
- [Chilanga Cement PLC](./chilanga-cement-plc/) - Chilanga

**Services:**
- [Shoprite Checkers Zambia](./shoprite-checkers-zambia/) - Lusaka (Retail)
- [Zambia Railways Limited](./zambia-railways-limited/) - Lusaka (Transport)
- [Zambian Properties Ltd](./zambian-properties-ltd/) - Lusaka (Real Estate)
- [Road Development Agency](./road-development-agency/) - Lusaka (Government)

### 📁 By Folder Name

| # | Company | Folder | Industry |
|---|---------|--------|----------|
| 1 | Konkola Copper Mines PLC | `konkola-copper-mines-plc` | Mining - Copper |
| 2 | National Milling Corporation | `national-milling-corporation` | Agriculture - Milling |
| 3 | Mopani Copper Mines PLC | `mopani-copper-mines-plc` | Mining - Copper |
| 4 | Zambian Breweries PLC | `zambian-breweries-plc` | Manufacturing - Beverages |
| 5 | Zambia Sugar PLC | `zambia-sugar-plc` | Agriculture - Sugar |
| 6 | Chilanga Cement PLC | `chilanga-cement-plc` | Manufacturing - Cement |
| 7 | Shoprite Checkers Zambia | `shoprite-checkers-zambia` | Retail |
| 8 | Zambia Railways Limited | `zambia-railways-limited` | Transport - Logistics |
| 9 | Zambian Properties Ltd | `zambian-properties-ltd` | Real Estate |
| 10 | Zambeef Products PLC | `zambeef-products-plc` | Agriculture - Meat Processing |
| 11 | Road Development Agency | `road-development-agency` | Government - Infrastructure |

## Reference Files

- **[COMPANY_MAPPING.json](./COMPANY_MAPPING.json)** - Machine-readable company reference data
- **[ZAMBIAN_COMPANIES_README.md](./ZAMBIAN_COMPANIES_README.md)** - Detailed documentation for each company
- **[Original Sample Data](./accounting/)** - Base template for all company data

## Sample JSON Files

Each company folder includes 51 JSON service files:

### Core Accounting Services
- accounting-service.json
- accounting-period-service.json
- accounting-settings-service.json
- journal-entry-service.json
- reconciliation-report-service.json

### Financial Management
- budget-service.json
- financial-modeling-service.json
- payroll-service.json
- tax-compliance-service.json
- tax-filing-service.json

### Operations & Inventory
- inventory-service.json
- product-service.json
- vendor-service.json
- customer-service.json
- supplier-service.json (if included)

### Reporting & Analytics
- management-report-service.json
- advanced-reporting-service.json
- predictive-analytics-service.json
- chart-data-service.json
- decision-engine-service.json

### CRM & Customer Management
- crm-account-service.json
- contact-service.json
- lead-management-service.json
- opportunity-service.json
- customer-segmentation-service.json

### Additional Services
- campaign-service.json
- case-management-service.json
- project-costing-service.json
- multi-entity-service.json
- security-service.json
- audit-log-service.json
- activity-log-service.json
- And 24+ more service files

## Data Specifications

- **Currency**: ZMW (Zambian Kwacha)
- **Format**: JSON
- **Encoding**: UTF-8
- **Files per Company**: 52 (51 JSON + 1 README)
- **Total Storage**: ~2.5 MB
- **Validation**: All JSON files validated

## Usage Examples

### Loading Data from a Company

```
GET /sample-data/konkola-copper-mines-plc/accounting-service.json
GET /sample-data/zambian-breweries-plc/inventory-service.json
GET /sample-data/shoprite-checkers-zambia/customer-service.json
```

### Programmatic Access

```javascript
// Load company mapping
fetch('/sample-data/COMPANY_MAPPING.json')
  .then(r => r.json())
  .then(data => {
    data.companies.forEach(company => {
      console.log(`${company.name}: /sample-data/${company.folderId}/`);
    });
  });
```

## Integration Notes

1. **Multi-Company Support**: Use company folder names to route requests
2. **Identical Schema**: All companies share the same JSON structure
3. **Industry Customization**: Data reflects industry-specific operations
4. **Real Company Names**: Based on actual Zambian businesses
5. **Test Data**: Suitable for development and testing environments

## Documentation

For detailed information about each company, see:
- **[ZAMBIAN_COMPANIES_README.md](./ZAMBIAN_COMPANIES_README.md)** - Full company profiles with industry details

## File Structure

```
/sample-data/
├── INDEX.md                             ← You are here
├── COMPANY_MAPPING.json
├── ZAMBIAN_COMPANIES_README.md
├── IMPLEMENTATION_SUMMARY.md
├── weather.json
├── accounting/                          (Original sample template)
├── konkola-copper-mines-plc/
├── national-milling-corporation/
├── mopani-copper-mines-plc/
├── zambian-breweries-plc/
├── zambia-sugar-plc/
├── chilanga-cement-plc/
├── shoprite-checkers-zambia/
├── zambia-railways-limited/
├── zambian-properties-ltd/
├── zambeef-products-plc/
└── road-development-agency/
```

## Support

For issues or questions about the sample data:
1. Check [ZAMBIAN_COMPANIES_README.md](./ZAMBIAN_COMPANIES_README.md) for company details
2. Review [COMPANY_MAPPING.json](./COMPANY_MAPPING.json) for structured data
3. Examine individual JSON files in company folders
4. Verify JSON validity using a JSON validator

---

**Created**: January 18, 2025  
**Last Updated**: January 18, 2025  
**Version**: 1.0

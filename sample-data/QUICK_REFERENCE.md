# Quick Reference: 12 Zambian Companies Sample Data

## Overview
- **Total Companies:** 12
- **Total Files:** 624 (51 JSON + 1 README per company)
- **Total JSON Files:** 612
- **Items per Company:** ~1,530 items (30 per service file × 51 files)
- **Total Items:** ~18,360 items across all companies

## Company Folder Names (URL-safe slugs)

### Agriculture Sector
- `mununshi-fruit-company` - Fruit cultivation and export
- `zampalm` - Palm oil production
- `zambezi-cashew-company` - Cashew farming and processing
- `eastern-tropical-fruit-company` - Tropical fruit production
- `kalene-hills-fruit-company` - Multi-fruit cultivation

### Manufacturing Sector
- `nitrogen-chemicals-zambia` - Industrial chemicals and fertilizers

### Logistics & Transport Sector
- `mpulungu-harbour-corporation` - Port operations
- `zambia-airways` - Aviation and cargo
- `zambia-cargo-logistics` - Freight and distribution

### Media & Publishing Sector
- `times-printpak` - Commercial printing
- `zambia-daily-mail` - Newspaper and media

### Telecommunications Sector
- `zamtel` - Mobile and broadband services

## Directory Location
```
src/WebApps/AccountingWebApp/wwwroot/sample-data/
├── mununshi-fruit-company/
├── nitrogen-chemicals-zambia/
├── zampalm/
├── zambezi-cashew-company/
├── eastern-tropical-fruit-company/
├── kalene-hills-fruit-company/
├── mpulungu-harbour-corporation/
├── zambia-airways/
├── zambia-cargo-logistics/
├── times-printpak/
├── zambia-daily-mail/
└── zamtel/
```

## Standard File Structure (per company)

### Settings & Context (Single Objects)
- `accounting-settings-service.json` - Company configuration
- `current-user-context.json` - User context data

### Business Data (30 items each)
- `customer-service.json` - Customer records
- `vendor-service.json` - Vendor/supplier records
- `product-service.json` - Product inventory
- `contact-service.json` - Contact information
- `budget-service.json` - Budget allocations

### Operational Data (30 items each)
- `accounting-service.json` - Accounting entries
- `journal-entry-service.json` - Journal entries
- `invoice-service.json` - Invoice records (if exists)
- `bank-transfer-service.json` - Bank transfers
- `recurring-transaction-service.json` - Recurring transactions

### And 40+ additional service files (30 items each)

## Data Characteristics

### Zambian Context
| Field | Value |
|-------|-------|
| Currency | ZMW (Zambian Kwacha) |
| Tax Format | TPIN-XXXXXXXXXX (10 digits) |
| Phone Format | +260-XXX-XXXXXX |
| Date Format | DD/MM/YYYY |
| Locale | en-ZM |
| Tax Rate | 16% |
| Payment Terms | NET30 (default) |

### Geographic Coverage
- Lusaka Province
- Copperbelt Province
- Eastern Province
- Southern Province
- Northern Province
- Central Province

### Industry-Specific Features
Each company has customized:
- **Products**: Industry-appropriate items
- **Suppliers**: Relevant to the sector
- **Customers**: Types that buy from this industry
- **Services**: Operations specific to the business
- **Locations**: Company headquarters and operations areas

## Sample Data Access

### Get a company's settings
```
/sample-data/{company-slug}/accounting-settings-service.json
```

Example:
```
/sample-data/zambia-airways/accounting-settings-service.json
```

### Get company customers
```
/sample-data/{company-slug}/customer-service.json
```

### Get company products
```
/sample-data/{company-slug}/product-service.json
```

## Data Quality Checklist

✓ All JSON files are valid  
✓ All settings have company name  
✓ All records have unique IDs  
✓ All currency in ZMW  
✓ All tax IDs in TPIN format  
✓ All phone numbers valid Zambian format  
✓ All addresses in Zambian locations  
✓ Industry data is contextually appropriate  
✓ 30 items in each service file  
✓ Settings are single objects  

## Usage Examples

### For Development
```javascript
// Load a company's sample data
const companySlug = 'mununshi-fruit-company';
const customersUrl = `/sample-data/${companySlug}/customer-service.json`;
```

### For Testing
```bash
# Test a specific company
curl http://localhost/sample-data/zambia-airways/accounting-settings-service.json

# Verify all JSON files
for file in src/WebApps/AccountingWebApp/wwwroot/sample-data/*/\*.json; do
  python3 -m json.tool "$file" > /dev/null || echo "Invalid: $file"
done
```

### For Documentation
- Each company folder includes a `README.md` with details
- See `NEW_ZAMBIAN_COMPANIES_CREATED.md` for comprehensive documentation

## Industry Guides

### Agriculture Companies
- **Products**: Fruits, vegetables, oils, processed goods
- **Key Files**: product-service.json, vendor-service.json
- **Typical Workflow**: Harvest → Process → Package → Export

### Manufacturing Companies
- **Products**: Chemicals, industrial goods
- **Key Files**: product-service.json, inventory-service.json
- **Typical Workflow**: Raw materials → Production → Quality check → Distribution

### Logistics Companies
- **Products**: Transportation, warehousing services
- **Key Files**: customer-service.json, budget-service.json
- **Typical Workflow**: Pickup → Storage → Delivery → Invoice

### Media Companies
- **Products**: Publications, advertising
- **Key Files**: customer-service.json, product-service.json
- **Typical Workflow**: Content creation → Publishing → Distribution → Revenue

### Telecom Companies
- **Products**: Services (mobile, data, broadband)
- **Key Files**: customer-service.json, budget-service.json
- **Typical Workflow**: Customer acquisition → Service activation → Billing → Retention

## Notes

- All data is synthetic for demonstration purposes
- No real business information is included
- TPIN numbers are randomized
- Phone numbers use valid prefixes but are randomized
- Addresses reference real locations but companies are fictional
- All companies follow Zambian business conventions

## Support

For detailed information, see:
- `NEW_ZAMBIAN_COMPANIES_CREATED.md` - Comprehensive documentation
- Company-specific `README.md` files in each folder
- Individual `accounting-settings-service.json` for company details

---
Generated: January 19, 2024

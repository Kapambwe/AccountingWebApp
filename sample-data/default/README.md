# Default mock-service sample data

These files provide fallback data for mock services when a tenant-specific file is not present. The shared `JsonDataLoader` checks the active tenant first and then falls back to this directory.

The app-specific JSON-backed mock services use these paths:

- `authentication/users.json`
- `ai-assistant/assistant.json`
- `app-preferences/preferences.json`
- `referrals/context.json`
- `referrals/local-referrals.json`
- `trust/statements.json`

Authentication data is for local demonstration only. It must not contain production credentials or tokens.

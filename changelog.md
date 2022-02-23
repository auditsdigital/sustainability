# Changelog

## v. 0.5.2 (23/2/2022)

- New feature: id in settings

## v. 0.5.1 (23/2/2022)

- Fixes cold run page not closing 

## v. 0.5.0 (15/2/2022)

- Updates sustainability with the new design
- Upgrades packages
- Removes telemetry option
- Updates licensing to MIT

## v. 0.4.11 (15/4/2021)

- New option: Enable/Disable optional telemetry collected completely anonimously and never including private data.

## v. 0.4.0

- Achieved 100% coverage
- Added research notes
- New logo

### API Audit Settings

- Removed Page object
- New streams boolean option in connection settings
- New coldRun boolean option in connection settings

### Class Sustainability

- New auditStream member: a readable stream of audits to pipe from

### Cold run

A cold run with minimal setup is made to catch page redirects (3xx) and their location.
If the origin URL redirects to another URL, the second one is tested and a warning message is displayed in the output report. Defaults to true. Can be tweaked to your needs with the coldRun option.

### New collectors (+6)

- New lazy media collect
- New meta tag collect
- New robots collect
- New animations collect
- New screenshot collect
- New cookies collect
- Transfer collect now also gathers cache info

### New audits (+8)

- New avoidable bot traffic audit
- New avoid inline assets audit
- New cookie optimisation audit
- New leverage browser cache audit
- New pixel energy efficiency audit
- New reactive animations audit
- New WebM video format audit
- New avoid URL redirect audit

### Bug fixes

- WebP audit failing on jpeg images

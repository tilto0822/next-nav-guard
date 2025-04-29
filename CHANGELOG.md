# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.2.0] - 2025-04-29

Forked from [next-navigation-guard](https://github.com/LayerXcom/next-navigation-guard)

### Added

- Add React 19 peer dependencies ([#27](https://github.com/LayerXcom/next-navigation-guard/pull/27)) by [@marekventur](https://github.com/marekventur)
- Add 'useNavigationGuardStatus' hook to check if the guard is enabled, and dry run navigation guard. by [@tilto0822](https://github.com/tilto0822)
- Add 'GuardLink' component for guarding navigation in Next.js 15.3+ by [@tilto0822](https://github.com/tilto0822)
- Bump dev dependencies
    - Bump Next.js version to `15.3.1` from `^14.2.11`
    - Bump React version to `19.1.0` from `^18.3.1`

### Fixed

- Fix jest import error ([#14](https://github.com/LayerXcom/next-navigation-guard/pull/14)) by [@peinguin](https://github.com/peinguin)
- Fix `crypto.randomUUID()` is not working on browser. ([#17](https://github.com/LayerXcom/next-navigation-guard/pull/17)) by [@tmtmtoo](https://github.com/tmtmtoo)

## [0.1.2] - 2024-12-11

### Fixed

- deps: Support Next.js 14 / 15 as peer dependencies ([#13](https://github.com/LayerXcom/next-navigation-guard/pulls/13)) by [@zachelrath](https://github.com/zachelrath)

## [0.1.1] - 2024-10-07

### Fixed

- Fix back/forward button does not change the contents of the page ([#2](https://github.com/LayerXcom/next-navigation-guard/issues/2)).

## [0.1.0] - 2024-09-18

### Added

- The initial release of next-navigation-guard.

[unreleased]: https://github.com/tilto0822/next-nav-guard/compare/v0.2.0...HEAD
[0.2.0]: https://github.com/tilto0822/next-nav-guard/releases/tag/v0.2.0
[0.1.2]: https://github.com/LayerXcom/next-navigation-guard/releases/tag/v0.1.2
[0.1.1]: https://github.com/LayerXcom/next-navigation-guard/releases/tag/v0.1.1
[0.1.0]: https://github.com/LayerXcom/next-navigation-guard/releases/tag/v0.1.0

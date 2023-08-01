# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.1-alpha] - unreleased

This is an alpha version! The changes listed here are not final.

### Added
- Add AI Client icon components
- AI Assistant: Add function calling feature
- AI Client: add AI Assistant data context
- AI Client: add useAiContext() react hook
- AI Client: Add useAiSuggestions() react custom hook
- AI Client: Introduce AI Control component
- AI Client: introduce withAiDataProvider HOC

### Changed
- AI Client: add Icon suffix to icon components
- AI Client: handle properly passing the post_id parameter to endpoint
- AI Client: replace using CSS modules with the regular way

### Removed
- AI Client: remove unused image library

## 0.1.0 - 2023-07-25
### Added
- Add Jetpack AI Client [#30855]
- AI Client: add askQuestion() lib [#31964]
- AI Client: export SuggestionsEventSource updated library [#31944]
- AI Client: update and expose JWT library [#31924]

### Changed
- AI Client: stop using smart document visibility handling on the fetchEventSource library, so it does not restart the completion when changing tabs. [#32004]
- Updated package dependencies. [#31468]
- Updated package dependencies. [#31659]
- Updated package dependencies. [#31785]

[0.1.1-alpha]: https://github.com/Automattic/jetpack-ai-client/compare/v0.1.0...v0.1.1-alpha

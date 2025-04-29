# next-nav-guard

You use Next.js, and you want to show "You have unsaved changes that will be lost." dialog when user leaves page?
This library is just for you!

Support also Next.js 15+, React 19+

## Demo

[https://layerxcom.github.io/next-navigation-guard/](https://layerxcom.github.io/next-navigation-guard/)

## How does it work?

- [English Slide](https://speakerdeck.com/ypresto/cancel-next-js-page-navigation-full-throttle)
- [Japanese Slide](https://speakerdeck.com/ypresto/hack-to-prevent-page-navigation-in-next-js)

## Installation

```bash
npm install next-nav-guard
# or
yarn install next-nav-guard
# or
pnpm install next-nav-guard
```

- App Router: app/layout.tsx

  ```tsx
  <html lang="en">
    <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <NavigationGuardProvider>{children}</NavigationGuardProvider>
    </body>
  </html>
  ```

- Page Router: page/_app.tsx

  ```tsx
  export default function MyApp({ Component, pageProps }: AppProps) {
    return (
      <NavigationGuardProvider>
        <Component {...pageProps} />
      </NavigationGuardProvider>
    );
  }
  ```

## Usage

- window.confirm()

  ```tsx
  useNavigationGuard({ enabled: form.changed, confirm: () => window.confirm("You have unsaved changes that will be lost.") })
  ```

- Custom dialog component

  ```tsx
  const navGuard = useNavigationGuard({ enabled: form.changed })

  return (
    <>
      <YourContent />

      <Dialog open={navGuard.active}>
        <DialogText>You have unsaved changes that will be lost.</DialogText>

        <DialogActions>
          <DialogButton onClick={navGuard.reject}>Cancel</DialogButton>
          <DialogButton onClick={navGuard.accept}>Discard</DialogButton>
        </DialogActions>
      </Dialog>
    </>
  )
  ```

- Guard 'Link' component navigate action (Next.js 15.3+)
  - it will prevent navigation if any navGuard is enabled.

  ```tsx
  import { GuardLink } from "next-nav-guard";

  export function Comp() {
    // basically, support same props in 'Link'.
    // but 'as', 'ref' are excepts.
    // 'as' prop provide "override" for your custom 'Link' Component.
    // 'ref' prop is not working because it used for navigation handling in comp.
    return <GuardLink href="/">Go Home</GuardLink>
  }
  ```

See working example in example/ directory and its `NavigationGuardToggle` component.

## Thanks to

This package is forked from [next-navigation-guard](https://github.com/LayerXcom/next-navigation-guard)
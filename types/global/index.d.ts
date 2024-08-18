interface TranslateElementProps {
  readonly pageLanguage: string
  readonly autoDisplay: boolean
  readonly includedLanguages: string
  readonly layout: string
}

interface Window {
  googleTranslateElementInit: unknown

  readonly google: {
    readonly translate: {
      readonly TranslateElement: {
        new (props: TranslateElementProps, id: string)

        readonly InlineLayout: {
          readonly SIMPLE: string
        }
      }
    }
  }
}

import { createElement, forwardRef, JSX } from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const textVariants = cva("text-inherit leading-0", {
  variants: {
    size: {
      xxs: "text-[10px]",
      xs: "text-[12px]",
      sm: "text-[14px]",
      base: "text-[16px]",
      md: "text-[24px]",
      lg: "text-[32px]",
      xl: "text-[40px]",
      "2xl": "text-[48px]",
      "3xl": "text-[60px]",
      "4xl": "text-[72px]",
      "5xl": "text-[120px]",
    },
    weight: {
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      extrabold: "font-[900]",
    },
  },
  defaultVariants: {
    size: "base",
    weight: "semibold",
  },
})

// Maps each size to a sensible default HTML tag when `as` isn't passed.
const defaultElementMap = {
  xxs: "span",
  xs: "span",
  sm: "span",
  base: "p",
  md: "p",
  lg: "p",
  xl: "h3",
  "2xl": "h2",
  "3xl": "h1",
  "4xl": "h1",
  "5xl": "h1",
} as const

type TextElement = keyof JSX.IntrinsicElements

export interface TextProps<T extends TextElement = "p">
  extends VariantProps<typeof textVariants> {
  /** Which HTML element to render. Defaults based on `size` if omitted. */
  as?: T
  className?: string
  children?: React.ReactNode
  /** Truncate to a single line with ellipsis. */
  truncate?: boolean
  style?: React.CSSProperties
}

const Text = forwardRef<HTMLElement, TextProps<TextElement>>(
  (
    { as, size = "base", weight = "semibold", truncate, className, children, ...props },
    ref
  ) => {
    const resolvedSize = size ?? "base"
    const element = as ?? defaultElementMap[resolvedSize]

    return createElement(
      element,
      {
        ref,
        "data-slot": "text",
        className: cn(
          "leading-none",
          textVariants({ size: resolvedSize, weight }),
          truncate && "truncate",
          className
        ),
        ...props,
      },
      children
    )
  }
)

Text.displayName = "Text"

export { Text, textVariants }
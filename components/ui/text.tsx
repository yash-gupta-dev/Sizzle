import { createElement, forwardRef, JSX } from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const textVariants = cva("text-inherit leading-0", {
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-md",
      lg: "text-[60px]",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
    },
    weight: {
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
  xs: "span",
  sm: "span",
  base: "p",
  lg: "p",
  xl: "h3",
  "2xl": "h2",
  "3xl": "h1",
  "4xl": "h1",
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
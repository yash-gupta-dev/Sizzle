import { ReactNode } from "react"
import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Text } from "./text"

const buttonVariants = cva(
  "flex items-center justify-center p-5 gap-1.5 rounded-[14px] group/button cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-(--gray-3) text-(--gray-8) hover:bg-card-muted-hover hover:text-foreground",
        active: "bg-foreground text-black hover:bg-(--gray-9)",
        inactiveWithActiveText: "bg-card text-foreground hover:bg-card-muted-hover",
      },
      size: {
        default:
          "h-8 gap-1.5",
        xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-9 gap-1.5 px-2.5",
        icon: "size-8",
        "icon-xs":
          "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
        "icon-lg": "size-9",
      },
      bordered: {
        default: "border-0",
        slim: "border border-border-muted hover:border-border-muted-hover"
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      bordered: "default",
    },
  }
)

const iconOnlySizeMap = {
  default: "icon",
  xs: "icon-xs",
  sm: "icon-sm",
  lg: "icon-lg",
} as const

export interface ButtonProps
  extends Omit<ButtonPrimitive.Props, "children">,
  VariantProps<typeof buttonVariants> {
  children?: ReactNode
  /** Icon-only button. Omit `children` when using this. */
  icon?: ReactNode
  /** Icon shown before the text children. */
  startIcon?: ReactNode
  /** Icon shown after the text children. */
  endIcon?: ReactNode

  weight?: "normal" | "bold" | "medium" | "semibold" | null | undefined
  fontSize?: "xs" | "sm" | "lg" | "base" | "md" | "xl" | "2xl" | "3xl" | "4xl" | null | undefined
}

function Button({
  className,
  variant,
  size,
  fontSize,
  bordered,
  weight,
  icon,
  children,
  ...props
}: ButtonProps) {
  const isIconOnly = Boolean(icon) && !children
  const resolvedVariantSize = size ?? "default"

  const resolvedSize =
    isIconOnly && resolvedVariantSize in iconOnlySizeMap
      ? iconOnlySizeMap[resolvedVariantSize as keyof typeof iconOnlySizeMap]
      : resolvedVariantSize

  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(
        buttonVariants({ variant, bordered, size: resolvedSize, className })
      )}
      {...props}
    >
      {icon && <span data-icon="inline-start">{icon}</span>}
      {children && <Text size={fontSize} weight={weight}>{children}</Text>}
    </ButtonPrimitive>
  )
}

export { Button, buttonVariants }


import React, { ComponentProps } from 'react'
import Link from 'next/link'
import { cn } from '@/shared/helpers/classname'
 
const AppLink = ({className, ...props}: ComponentProps<typeof Link>) => {
	return (
		<Link className={cn(className, 'hovered:hover:text-primary transition')} {...props} />
	)
}

export default AppLink
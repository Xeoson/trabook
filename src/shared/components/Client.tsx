"use client"

import { PropsWithChildren, useEffect, useState } from "react";


const Client = (props: PropsWithChildren) => {
	const [isClient, setClient] = useState(false)

	useEffect(() => {
		setClient(true)
	}, [])

	return isClient ? props.children : null
};

export default Client;
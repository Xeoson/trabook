import { useEffect } from 'react';

export default (cb: (e: UIEvent) => void) => {

	useEffect(() => {
		const onResize = (e: UIEvent) => cb(e) 
		window.addEventListener("resize", onResize);
		return () => window.removeEventListener('resize', onResize)
	}, [])
}
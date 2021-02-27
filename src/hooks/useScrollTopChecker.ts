import { useState, useEffect, useCallback } from 'react'

/**
 * Description: Checks if the window scroll top position is passed the 'offset'
 */
const useScrollTopChecker = (threshold: number = 0): boolean => {
	const [scrolledPastActionBar, setScrolledPastActionBar] = useState(
		window.scrollY > threshold
	)

	const checkScrollPos = useCallback(
		() => setScrolledPastActionBar(window.scrollY > threshold),
		[threshold]
	)

	useEffect(() => {
		document.addEventListener('scroll', checkScrollPos)

		return () => document.removeEventListener('scroll', checkScrollPos)
	}, [checkScrollPos])

	return scrolledPastActionBar
}

export default useScrollTopChecker

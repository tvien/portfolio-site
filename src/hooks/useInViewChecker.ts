import { useRef, useState, useEffect, useCallback } from 'react'
import useScrollTopChecker from './useScrollTopChecker'

/**
 * Description: Returns a ref and a boolean. Pass the ref for the element that you
 *              want to see if it's in view.
 */
const useInViewChecker = (): {
	ref: React.MutableRefObject<any>
	isInView: boolean
} => {
	const ref = useRef(null)
	const [offSetTop, setOffSetTop] = useState(0)
	const calcOffSet = offSetTop - (window || { innerHeight: 0 }).innerHeight / 6
	const isInView = useScrollTopChecker(calcOffSet > 0 ? calcOffSet : 0)

	useEffect(() => {
		const { current } = ref

		if (current) {
			window.addEventListener('load', () => {
				setOffSetTop(current.offsetTop)
			})
		}
	}, [])

	return {
		ref,
		isInView
	}
}

export default useInViewChecker

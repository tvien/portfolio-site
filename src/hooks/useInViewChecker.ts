import { useRef, useState, useEffect, useCallback } from 'react'
import useScrollTopChecker from './useScrollTopChecker'

/**
 * Description: Returns a ref and a boolean. Pass the ref to the element you want to know if it's in scroll view
 */
const useInViewChecker = (): {
	ref: React.MutableRefObject<any>
	isInView: boolean
} => {
	const ref = useRef(null)
	const [offSetTop, setOffSetTop] = useState(0)
	const [windowInnerHt, setWindowInnerHt] = useState(0)
	const calcOffSet = offSetTop - windowInnerHt / 6

	const isInView = useScrollTopChecker(calcOffSet > 0 ? calcOffSet : 0)

	useEffect(() => {
		const { current } = ref

		if (current) {
			window.addEventListener('load', () => {
				setOffSetTop(current.offsetTop)
				setWindowInnerHt(window.innerHeight)
			})
		}
	}, [])

	return {
		ref,
		isInView
	}
}

export default useInViewChecker

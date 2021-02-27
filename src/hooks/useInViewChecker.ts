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
	const innerHt = typeof window !== `undefined` ? window.innerHeight : 0

	const ref = useRef(null)
	const [offSetTop, setOffSetTop] = useState(0)
	const calcOffSet = offSetTop - innerHt / 6
	const isInView = useScrollTopChecker(calcOffSet > 0 ? calcOffSet : 0)

	useEffect(() => {
		const { current } = ref

		if (typeof window !== `undefined`) {
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

import { reqPokemon } from "../api/index";
 
import { useRequest } from "ahooks"
import { useMemo } from "react"

interface Props {
  /** 是否是手动调用 */
  manual?: boolean
  /** 成功回调 */
  onSuccess?: unknown
}

/**
 *  自动获取配置信息并且存储到store中
 * @param props
 * @returns
 */
function usePokemon(props?: Props) {
  const { manual = false } = props || {}
  // const { set_config } = useOkStore()
  const { data, run: runReqPokemon } = useRequest(reqPokemon, {
    onSuccess: (data) => {
      // set_config(data)
      console.log("hi",data);
    },
    manual,
  })

  const res = useMemo(
    () => ({ data, run: runReqPokemon }),
    [data, runReqPokemon],
  )

  return res
}

export default usePokemon

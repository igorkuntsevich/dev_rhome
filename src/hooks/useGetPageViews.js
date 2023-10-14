import useSWR from "swr";
import { API } from "../api/api";
import { fetcher } from "../api/fetcher";



export const useGetPageViews =(url)=>{
  const { data,  isLoading } = useSWR(API.getAllViews, fetcher)
  if(!url){
    return 0
  }
  const safetyViewsList = data||[]
  const views = safetyViewsList?.[url]?.count||1
  return  isLoading?0 :views
}

import { useQuery, useMutation, useQueryClient } from "react-query";
import axios from "axios";

// import { TodoosPage } from '../Todoos.page'

const fetchTodos = async () => {
  const { data } = await axios.get("http://localhost:4000/Todoos");
  return data;
};

const addTodos = (todo) => {
  return axios.post("http://localhost:4000/Todoos", todo);
};

const updateTodo = (data) => {
  console.log({data});
  return axios.patch("http://localhost:4000/Todoos/" + data.id, { ...data });
};

const DeleateTodo =(id)=>{

  return axios.delete("http://localhost:4000/Todoos/"+id);
};



export const useTododata = (onSuccess, onErorr) => {
  return useQuery("Todoos", fetchTodos, {
    // cacheTime:5000,
    // staleTime:30000,
    // refetchOnMount:true,
    // refetchOnWindowFocus:true,
    // refetchInterval:2000,
    // refetchIntervalInBackground:true
    // enabled:false,
    onSuccess,
    onErorr,
    //   select:(data)=>{
    //     const superHeronames = data.data.map((hero) => hero.name)
    //     return superHeronames
    //   },
  });
};


export const useAddTodo = () => {
  const queryClient = useQueryClient();
  return useMutation(addTodos, {
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });
};

export const useUpdateTodo = () => {
  // console.log(444)
  const queryClient = useQueryClient();

  return useMutation(updateTodo, {
    
    onSettled: () => {
      queryClient.invalidateQueries("Todoos");
    },
  });
};
export const useDeleateTodo = () =>{
  
  const queryClient = useQueryClient();

  return useMutation (DeleateTodo,{
    onSuccess: () => {
      queryClient.invalidateQueries("Todoos");
    },
  })
}


import { login } from "api/auth.api";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { setUser } from "store/entities/auth";

export const useLogin = () => {
  const dispatch = useDispatch();

  return useMutation(login, {
    onSuccess: (data) => {
      dispatch(setUser(data));
    }
  });
};

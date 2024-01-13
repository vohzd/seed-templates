// renamed from 'ohmyfetch'
import { FetchError } from "ofetch";

type ErrorType = {
  data: any;
  statusCode?: number | null;
};

export const useErrorState = () => {
  const errorState = useState(
    "errorState",
    (): ErrorType => ({
      data: null,
    })
  );

  return errorState;
};

export function useHandleError(error: FetchError) {
  const { data, statusCode } = error;

  const errorState = useErrorState();

  errorState.value = {
    data,
    statusCode,
  };

  setTimeout(() => {
    errorState.value = {
      data: null,
      statusCode: null,
    };
  }, 3000);
}

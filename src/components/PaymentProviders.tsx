import { useGetProvidersQuery } from '../store/apis/PaymentsApi';

function PaymentProviders() {
  const {
    data, error, isLoading, isError,
  } = useGetProvidersQuery();

  return (
    <div>
      {isLoading ? (
        <pre>Loading...</pre>
      ) : isError ? (
        <pre>
          Error:
          {' '}
          {JSON.stringify(error)}
        </pre>
      ) : (
        <pre>
          Success:
          {' '}
          {data?.status === 'ok' ? 'YES' : 'NO'}
        </pre>

      )}
    </div>
  );
}

export default PaymentProviders;

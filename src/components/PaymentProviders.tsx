import { useGetProvidersQuery } from '../store/apis/PaymentsApi';

const client = 'test';

function PaymentProviders() {
  const {
    data, error, isLoading, isError,
  } = useGetProvidersQuery(client);

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
          {JSON.stringify(data?.data?.provider)}
        </pre>
      )}
    </div>
  );
}

export default PaymentProviders;

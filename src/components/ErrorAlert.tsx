const ErrorAlert: React.FC = () => (
  <div
    className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 max-w-xs  whitespace-nowrap rounded relative"
    role="alert"
  >
    <strong className="font-bold">ERROR WHILE FETCHING THE DATA</strong>
  </div>
);
export default ErrorAlert;

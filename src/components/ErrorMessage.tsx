import React from 'react';
import styled from 'styled-components';

interface ErrorMessageProps {
  message: string | undefined | null;
}

const StyledSpan = styled.span`
  color: var(--ion-color-danger);
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
`;

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message = undefined }) =>
  message ? <StyledSpan>{message}</StyledSpan> : null;

// show errores from react hook form
export const renderErrorMessages = (errors: any, _fieldName: string) => {
  let error = (errors as any)[_fieldName];
  return error ? <ErrorMessage message={error.message}></ErrorMessage> : null;
};

export default ErrorMessage;

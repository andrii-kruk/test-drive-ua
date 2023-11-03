import styled from 'styled-components';

export const ToolbarForm = styled.form`
  width: 879px;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  gap: 18px;
  align-items: center;
  margin-bottom: 50px;
`;

export const ToolbarContainer = styled.div`
  display: flex;
  gap: 18px;
  align-items: center;
`;

export const ToolbarGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ToolbarInputFrom = styled.input`
  width: 160px;
  padding: 14px 24px;
  border: none;
  border-radius: 14px 0px 0px 14px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  background: #f7f7fb;

  color: #121417;

  font-family: Manrope;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;

  outline: none;
`;

export const ToolbarLabel = styled.label`
  color: #8a8a89;

  font-family: Manrope;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.3;
`;

export const ToolbarInputTo = styled.input`
  width: 160px;
  padding: 14px 24px;
  border: none;
  border-radius: 0px 14px 14px 0px;
  background: #f7f7fb;

  color: #121417;

  font-family: Manrope;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1;

  outline: none;
`;

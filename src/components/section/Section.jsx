import { SectionStyle } from "./section.styled";

export const Section = ({ children }) => {
  return (
    <>
      <SectionStyle>
        {children}
        </SectionStyle>
    </>
  );
}

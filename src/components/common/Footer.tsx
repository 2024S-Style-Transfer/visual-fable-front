import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { ColorTheme } from '@/theme/theme';
import Link from 'next/link';
import useGenerateStore from '@/store/generateStore';
import emailjs from '@emailjs/browser';
import { NAV_ITEMS } from '@/constants/rotuer';

const Footer = () => {
  const { clearStore } = useGenerateStore();
  const handleHomeClick = (navName: (typeof NAV_ITEMS)[number]['name']) => {
    if (window.location.pathname !== '/' || navName !== 'Home') {
      return;
    }

    clearStore();
  };
  return (
    <FooterWrapper>
      <FooterContents>
        <h3 style={{ fontWeight: 'normal' }}>Link</h3>
        <hr />
        <ContentsWrapper>
          {NAV_ITEMS.map((item) => (
            <LinkText key={item.name} href={item.path} onClick={() => handleHomeClick(item.name)}>
              {item.name}
            </LinkText>
          ))}
        </ContentsWrapper>
      </FooterContents>

      <FooterContents>
        <h3 style={{ fontWeight: 'normal' }}>Suggestion</h3>
        <hr />
        <ContactForm />
      </FooterContents>
    </FooterWrapper>
  );
};
const FooterWrapper = styled.div`
  display: flex;
  background-color: ${ColorTheme.shadowColor};
  width: 100%;
  height: 360px;
  margin-top: 80px;
  padding: 20px 200px;
  color: ${ColorTheme.placeholderColor};
`;

const FooterContents = styled.div`
  width: 80%;
  text-align: center;
  padding: 24px;
`;
const ContactForm: React.FC = () => {
  const emailjs_user_id = process.env.NEXT_PUBLIC_EMAILJS_USER_ID!;
  const emailjs_service_id = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
  const emailjs_template_id = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;

  useEffect(() => {
    if (!emailjs_user_id) {
      return;
    }

    console.log(emailjs_user_id);

    emailjs.init(emailjs_user_id);
  }, [emailjs_user_id]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const contactNumberInput = form.contact_number as HTMLInputElement;
    contactNumberInput.value = ((Math.random() * 100000) | 0).toString();
    emailjs.sendForm(emailjs_service_id, emailjs_template_id, form).then(
      () => {
        window.alert('전송 완료되었습니다.');
        form.reset();
      },
      (error) => {
        window.alert('전송 실패하였습니다. 관리자에게 문의하십시오.');
      }
    );
  };

  return (
    <FormBox>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div style={{ display: 'flex' }}>
          <input type="hidden" name="contact_number" />
          <ContentsWrapper style={{ textAlign: 'start' }}>
            <label htmlFor="to_name">Name</label>
            <input type="text" name="to_name" id="to_name" style={{ width: '100%' }} />
          </ContentsWrapper>
          <div style={{ width: 12 }} />
          <ContentsWrapper style={{ textAlign: 'start' }}>
            <label htmlFor="from_email">Email</label>
            <input type="email" name="from_email" id="from_email" style={{ width: '100%' }} />
          </ContentsWrapper>
        </div>
        <div style={{ height: 12 }} />
        <ContentsWrapper style={{ textAlign: 'start' }}>
          <label htmlFor="message_html">Message</label>
          <textarea name="message_html" id="message_html" style={{ width: '100%', resize: 'none' }}></textarea>
        </ContentsWrapper>
        <div style={{ height: 6 }} />
        <SendInput type="submit" value="Send"></SendInput>
      </form>
    </FormBox>
  );
};

const FormBox = styled.div`
  background-color: ${ColorTheme.backColor};
  text-align: center;
  padding: 16px;
  border-radius: 10px;
`;

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SendInput = styled.input`
  width: 100%;
`;

const LinkText = styled(Link)`
  margin-bottom: 12px;
  &:hover {
    color: black;
  }
`;
export default Footer;

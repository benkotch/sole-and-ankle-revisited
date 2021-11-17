/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import Dialog, { DialogOverlay, DialogContent } from "@reach/dialog";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

import { WEIGHTS } from "../../constants";

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="menu">
        <VisuallyHidden>Dismiss Menu</VisuallyHidden>
        <Button onClick={onDismiss}>
          <Icon id={"close"} size={20} />
        </Button>
        <Filler />
        <Nav>
          <Link href="/sale">Sale</Link>
          <Link href="/new">New&nbsp;Releases</Link>
          <Link href="/men">Men</Link>
          <Link href="/women">Women</Link>
          <Link href="/kids">Kids</Link>
          <Link href="/collections">Collections</Link>
        </Nav>
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  background-color: var(--color-backdrop);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
`;

const Wrapper = styled(Dialog)`
  position: absolute;
`;

const Content = styled(DialogContent)`
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #fff;
  height: 100%;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  font-family: Raleway;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  color: var(--color-gray-900);
  /* identical to box height */
  text-transform: uppercase;

  padding: 32px 22px 32px 32px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;

  font-weight: ${WEIGHTS.medium};
  font-size: 1.5rem;

  &:first-of-type {
    color: var(--color-secondary);
  }

  &:hover {
    color: var(--color-secondary);
  }
`;

const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const FooterLink = styled.a`
  color: var(--color-gray-700);
  text-transform: initial;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;

  &:not(:last-of-type) {
    margin-bottom: 14px;
  }

  &:hover {
    color: var(--color-secondary);
  }
`;

const Button = styled(UnstyledButton)`
  /* align-self: flex-end; */
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px;
`;

const Filler = styled.div`
  flex: 1;
`;

export default MobileMenu;

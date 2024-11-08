import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Typography } from "../../core/theme/typography";
import tokens from "../../core/theme/tokens";

const BreadcrumbContainer = styled.nav`
  display: inline;
  position: fixed;
  right: ${tokens.margin.BASELINE * 2}px;
`;

const Separator = styled.span`
  margin: 0 8px;
`;

const Breadcrumb = () => {
  const location = useLocation();

  const pathSegments = location.pathname.split("/").filter(Boolean);

  return (
    <BreadcrumbContainer>
      {pathSegments.map((segment, index) => {
        const to = `/${pathSegments.slice(0, index + 1).join("/")}`;

        return (
          <React.Fragment key={to}>
            <Separator>/</Separator>
            <Typography.BodySmall as={Link} to={to}>
              {segment.charAt(0).toUpperCase() + segment.slice(1)}
            </Typography.BodySmall>
          </React.Fragment>
        );
      })}
    </BreadcrumbContainer>
  );
};

export default Breadcrumb;

// Borrowed the original MUI CardHeader code form GitHub to make some slight changes to it's layout
import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { withStyles, Typography } from "@material-ui/core";

export const styles = {
  /* Styles applied to the root element. */
  root: {
    display: "flex",
    alignItems: "center",
    padding: 10
  },
  /* Styles applied to the avatar element. */
  avatar: {
    flex: "0 0 auto",
    transform: "scale(0.85)",
    marginRight: 0,
    marginTop: 0
  },
  /* Styles applied to the action element. */
  action: {
    flex: "0 0 auto",
    alignSelf: "flex-start",
    marginTop: -8,
    marginRight: -10,
    width: "fit-content",
    transform: "scale(0.75)"
  },
  /* Styles applied to the content wrapper element. */
  content: {
    flex: "1 1 auto"
  },
  /* Styles applied to the title Typography element. */
  title: {
    // fontSize: "1vw"
    fontSize: "115%"
  },
  /* Styles applied to the subheader Typography element. */
  subheader: {
    marginLeft: "0",
    marginTop: "10px",
    textAlign: "left"
  },
  subheader2: {
    marginLeft: "0",
    textAlign: "left",
    fontWeight: "600"
  }
};

const CardHeader = React.forwardRef(function CardHeader(props, ref) {
  const {
    action,
    avatar,
    classes,
    className,
    component: Component = "div",
    disableTypography = false,
    subheader: subheaderProp,
    subheader2: subheaderProp2,
    subheaderTypographyProps,
    title: titleProp,
    titleTypographyProps,
    ...other
  } = props;

  let title = titleProp;
  if (title != null && title.type !== Typography && !disableTypography) {
    title = (
      <Typography
        variant={avatar ? "body2" : "h5"}
        className={classes.title}
        component="span"
        display="block"
        {...titleTypographyProps}
      >
        {title}
      </Typography>
    );
  }

  let subheader = subheaderProp;
  if (
    subheader != null &&
    subheader.type !== Typography &&
    !disableTypography
  ) {
    subheader = (
      <Typography
        variant={avatar ? "body2" : "body1"}
        className={classes.subheader}
        color="textSecondary"
        component="span"
        display="block"
        {...subheaderTypographyProps}
      >
        {subheader}
      </Typography>
    );
  }

  let subheader2 = subheaderProp2;
  if (
    subheader2 != null &&
    subheader2.type !== Typography &&
    !disableTypography
  ) {
    subheader2 = (
      <div style={{ display: "flex" }}>
        <Typography
          variant={avatar ? "body2" : "body1"}
          className={classes.subheader2}
          color="textSecondary"
          component="span"
          display="block"
          {...subheaderTypographyProps}
        >
          {subheader2}
        </Typography>
        <Typography
          variant={avatar ? "body2" : "body1"}
          className={classes.subheader}
          style={{ marginTop: "0", marginLeft: "5px" }}
          color="textSecondary"
          component="span"
          display="block"
          {...subheaderTypographyProps}
        >
          {`minutes`}
        </Typography>
      </div>
    );
  }

  return (
    <Component className={clsx(classes.root, className)} ref={ref} {...other}>
      <div className={classes.content}>
        {title}
        {subheader}
        {subheader2}
      </div>
      <div
        style={{
          display: "block"
        }}
      >
        {/* {action && <div className={classes.action}>{action}</div>} */}
        {avatar && <div className={classes.avatar}>{avatar}</div>}
      </div>
    </Component>
  );
});

CardHeader.propTypes = {
  /**
   * The action to display in the card header.
   */
  action: PropTypes.node,
  /**
   * The Avatar for the Card Header.
   */
  avatar: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: PropTypes.object.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.elementType,
  /**
   * If `true`, `subheader` and `title` won't be wrapped by a Typography component.
   * This can be useful to render an alternative Typography variant by wrapping
   * the `title` text, and optional `subheader` text
   * with the Typography component.
   */
  disableTypography: PropTypes.bool,
  /**
   * The content of the component.
   */
  subheader: PropTypes.node,
  /**
   * These props will be forwarded to the subheader
   * (as long as disableTypography is not `true`).
   */
  subheaderTypographyProps: PropTypes.object,
  /**
   * The content of the Card Title.
   */
  title: PropTypes.node,
  /**
   * These props will be forwarded to the title
   * (as long as disableTypography is not `true`).
   */
  titleTypographyProps: PropTypes.object
};

export default withStyles(styles, { name: "MuiCardHeader" })(CardHeader);

function About({ name, email }) {
  let about;
  if (name && email) {
    about = (
      <h3>
        About {name}, email: {email}
      </h3>
    );
  } else {
    about = <h3>About Me</h3>;
  }
  return (
    <>
      <h1>About Page</h1>
      {about}
    </>
  );
}

export default About;

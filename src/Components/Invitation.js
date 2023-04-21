import React from "react";
import Text from "./Text";

const Invitation = ({ name, subject, email, friends, place }) => {
  return (
    <div>
      <span>
        Subject : <Text txt={subject} />
      </span>
      <br />
      <span>
        To : <Text txt={email} />
      </span>
      <br />
      <span>
        Hi , <Text txt={name} />
      </span>
      <br />
      <p>
        I am having <Text txt={subject} /> next Friday at my Home . Would you
        like to come ? It will be fun . Lots of people from my school are <br />
        coming . you know some of them <Text txt={friends} />
      </p>
      <p>
        My house is behind our school ,near <Text txt={place} />
      </p>
      <p>I hope you will come and see you soon</p>
      <p>from</p>
      <Text txt={name} />
    </div>
  );
};

export default Invitation; 

import AuthLayout from "../../../components/layout/layout";
import "./style.scss";
import Nav2 from "../../../components/Nav/Nav2";
import Footer from "../../../components/footer";

const Privacy = () => {
  return (
    <div className="privacy-pg">
      <AuthLayout extra={true}>
        <section className="topSection">
          <Nav2 />
          <div className="text">
            <h4>PRIVACY POLICY</h4>
          </div>
        </section>
      </AuthLayout>
      <div className="writeSide">
        <div className="textFirst">
          <p className="head">Information we collect:</p>
          <p className="desc">
            Yaraa collects information from enquiry forms, contacts forms,
            Google GSuite or Microsoft Office 365, and others, as applicable to
            provide better service to all users. This includes first name, last
            name, email address, phone numbers and email groups that users
            belong to. We store this personal information on Google Cloud
            Services. Our legal basis for the collection of user data is Art 6
            (1) b) GDPR and Art. 6 (1) f) GDPR. Our legitimate interest is to
            optimize our product, increase user experience, enhance our customer
            support, and improve our internal process efficiency.
          </p>
        </div>
        <div className="textFirst">
          <p className="head">
            Information we collect as customers use our service.
          </p>
          <p className="desc">
            We may collect specific information about how customers use our
            product. This include situations such as how a customer uses a
            specific feature and when a customer uses the product. The
            information is collected as data logs, images, or a logical sequence
            of images/videos to reply an issue encountered by a user. Our
            logging system automatically collects information such as the
            internet protocol address, browser type, browser language, referring
            URL, features accessed, errors generated, time zone, geo-location
            data, operating system information, and other such information that
            is transmitted in the header of the user’s HTTP request. This
            information is stored in log files. We use these log files to
            analyze trends, administer, and improve the application. Our legal
            basis for the collection of user data is Art 6 (1) b) GDPR and Art.
            6 (1) f) GDPR. Our legitimate interest is to optimize our product,
            increase user experience, enhance our customer support, and improve
            our internal process efficiency. Google user data We use Google APIs
            for achieving the following: <br /> <br />
            1. Google OAuth APIs are used to perform a Single Sign On through
            Google, while doing so we ensure that the email provided by the
            Google Auth server is a valid user of the Yaraa system. <br />
            2. We use Google Drive APIs to retrieve file URLs and Ids of the
            files attached by the user into his/her Yaraa account. We also
            manage the permissions of these files through the drive APIs when
            the workflow on Yaraa attached to these files are in progress.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;

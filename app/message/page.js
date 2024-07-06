import { portfolio } from "@/portfolioInfo";

function page() {
  return (
    <>
      <p>Invalid parameter &quot;body&quot;</p>
      <p>
        If you think there has been an issue, please email me at
        <i> at {portfolio.personalInfo.email}</i>
      </p>
      <p
        className="footer"
        style={{
          borderBottomWidth: "0px",
          borderTopWidth: "1px",
          marginTop: "50px",
        }}
      ></p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          paddingTop: "4px",
          paddingBottom: "0px",
          margin: "0px",
          verticalAlign: " middle",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      ></div>
    </>
  );
}

export default page;

"use client";

import { useEffect } from "react";
import { useNetwork, useOs } from "@mantine/hooks";

const NetworkOSInfo = () => {
  const network = useNetwork();
  const os = useOs();

  useEffect(() => {
    // Store network and OS info in localStorage
    localStorage.setItem(
      "networkInfo",
      JSON.stringify({
        online: network.online,
        downlink: network.downlink,
        effectiveType: network.effectiveType,
        rtt: network.rtt,
        saveData: network.saveData,
        type: network.type,
      })
    );

    localStorage.setItem("osInfo", os);

    console.log("Network info:", network);
    console.log("OS info:", os);
  }, [network, os]);

  return null; // This component doesn't render anything
};

export default NetworkOSInfo;

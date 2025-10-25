import { Theme } from "@rainbow-me/rainbowkit";
export const CoffeeTheme: Theme = {
  blurs: {
    modalOverlay: "rgba(62, 39, 35, 0.95)",
  },
  colors: {
    accentColor: "rgba(62, 39, 35, 0.95)",
    accentColorForeground: "rgba(255, 255, 255, 0.95)",

    actionButtonBorder: "rgba(93, 64, 55, 0.4)",
    actionButtonBorderMobile: "rgba(93, 64, 55, 0.3)",
    actionButtonSecondaryBackground: "rgba(78, 52, 46, 0.6)",

    closeButton: "rgba(255, 255, 255, 0.8)",
    closeButtonBackground: "rgba(62, 39, 35, 0.8)",

    connectButtonBackground: "rgba(78, 52, 46, 0.95)",
    connectButtonBackgroundError: "rgba(176, 50, 50, 0.9)",
    connectButtonInnerBackground: "rgba(93, 64, 55, 0.95)",
    connectButtonText: "rgba(255, 255, 255, 0.9)",
    connectButtonTextError: "rgba(255, 230, 230, 0.95)",

    connectionIndicator: "rgba(205, 133, 63, 0.9)",

    downloadBottomCardBackground: "rgba(93, 64, 55, 0.9)",
    downloadTopCardBackground: "rgba(62, 39, 35, 0.9)",

    error: "rgba(176, 50, 50, 0.95)",

    generalBorder: "rgba(93, 64, 55, 0.5)",
    generalBorderDim: "rgba(93, 64, 55, 0.2)",

    menuItemBackground: "rgba(78, 52, 46, 0.8)",
    modalBackdrop: "rgba(33, 24, 21, 0.8)",
    modalBackground: "rgba(48, 33, 28, 0.95)",
    modalBorder: "rgba(93, 64, 55, 0.6)",

    modalText: "rgba(205, 133, 63, 0.9)",
    modalTextDim: "rgba(205, 133, 63, 0.7)",
    modalTextSecondary: "rgba(205, 133, 63, 0.7)",

    profileAction: "rgba(78, 52, 46, 0.9)",
    profileActionHover: "rgba(93, 64, 55, 1)",
    profileForeground: "rgba(255, 255, 255, 0.95)",

    selectedOptionBorder: "rgba(205, 133, 63, 0.9)",
    standby: "rgba(205, 133, 63, 0.9)",
  },
  radii: {
    actionButton: "12px",
    connectButton: "12px",
    menuButton: "12px",
    modal: "16px",
    modalMobile: "12px",
  },
  shadows: {
    connectButton: "0px 4px 8px rgba(0, 0, 0, 0.25)",
    dialog: "0px 4px 12px rgba(0, 0, 0, 0.3)",
    profileDetailsAction: "0px 2px 6px rgba(0, 0, 0, 0.15)",
    selectedOption: "0px 0px 0px 1px rgba(205, 133, 63, 0.9)",
    selectedWallet: "0px 0px 0px 1px rgba(205, 133, 63, 0.9)",
    walletLogo: "0px 2px 4px rgba(0, 0, 0, 0.25)",
  },
  fonts: {
    body: "Inter, sans-serif",
  },
};

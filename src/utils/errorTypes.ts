import { ACTION_TYPES } from "../reducers/actionTypes";

export const showErrorDefaults: { [key: string]: { [key: string]: boolean } } =
  {
    metadataErrors: {
      metadataFileTooBig: false,
    },
    treeErrors: {
      treeFileTooBig: false,
      invalidJson: false,
    },
    fetchErrors: {
      fetchInvalidFile: false,
      fetchUrlMissing: false,
    },
  };

export const errorTypes: {
  [key: string]: {
    [key: string]: { title: string; content: string; onClose: string };
  };
} = {
  metadataErrors: {
    metadataFileTooBig: {
      title: "Uh oh. That metadata file is too big",
      content:
        "Please choose a metadata file that is <15MB. If this is a repeated issue for you, please get in touch!",
      onClose: ACTION_TYPES.CLEAR_METADATA_FILE_SIZE_ERROR,
    },
  },

  treeErrors: {
    treeFileTooBig: {
      title: "Uh oh. That tree file is too big",
      content:
        "Please choose a tree file that is <15MB. If this is a repeated issue for you, please get in touch!",
      onClose: ACTION_TYPES.CLEAR_TREE_ERROR,
    },
    invalidJson: {
      title: "Woops! We can't read that tree file",
      content:
        "We weren't able to parse your tree JSON file. If you believe this is in error, please get in touch so we can improve!",
      onClose: ACTION_TYPES.CLEAR_TREE_ERROR,
    },
  },

  fetchErrors: {
    fetchInvalidFile: {
      title: "Woops! Error fetching tree file",
      content:
        "We weren't able to import your tree data. Please confirm your URL is correct and publicly accessible, or upload your JSON file directly below.",
      onClose: ACTION_TYPES.FETCH_ERROR_MSG_CLEAR,
    },
    fetchUrlMissing: {
      title: "Woops! Error fetching tree file",
      content:
        "We didn't receive a URL to fetch from. Please try fetching again with format: https://galago.czgenepi.org/#/fetch/your-url-here",
      onClose: ACTION_TYPES.FETCH_ERROR_MSG_CLEAR,
    },
  },
};

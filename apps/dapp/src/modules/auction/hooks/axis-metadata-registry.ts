export const metadataRegistryAbi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "serviceSigner_",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "auctionHouses_",
        type: "address[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AlreadyAssigned",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "param",
        type: "string",
      },
    ],
    name: "InvalidParam",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidSignature",
    type: "error",
  },
  {
    inputs: [],
    name: "NotAuthorized",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "auctionHouse",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint96",
        name: "lotId",
        type: "uint96",
      },
      {
        indexed: false,
        internalType: "string",
        name: "ipfsCID",
        type: "string",
      },
    ],
    name: "AuctionRegistered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "curator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "xId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "ipfsCID",
        type: "string",
      },
    ],
    name: "CuratorRegistered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "xId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "ipfsCID",
        type: "string",
      },
    ],
    name: "CuratorUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "auctionHouse_",
        type: "address",
      },
    ],
    name: "addAuctionHouse",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "xId_",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "curator_",
        type: "address",
      },
    ],
    name: "addCuratorAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "auctionHouse",
        type: "address",
      },
      {
        internalType: "uint96",
        name: "lotId",
        type: "uint96",
      },
    ],
    name: "auctionMetadata",
    outputs: [
      {
        internalType: "string",
        name: "ipfsCID",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "chainId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "curator",
        type: "address",
      },
    ],
    name: "curatorId",
    outputs: [
      {
        internalType: "uint256",
        name: "xId",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "xId",
        type: "uint256",
      },
    ],
    name: "curatorMetadata",
    outputs: [
      {
        internalType: "string",
        name: "ipfsCID",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "curator",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "xId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "ipfsCID",
            type: "string",
          },
        ],
        internalType: "struct AxisMetadataRegistry.CuratorRegistration",
        name: "payload_",
        type: "tuple",
      },
    ],
    name: "getDigest",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isAuctionHouse",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "signer_",
        type: "address",
      },
      {
        components: [
          {
            internalType: "address",
            name: "curator",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "xId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "ipfsCID",
            type: "string",
          },
        ],
        internalType: "struct AxisMetadataRegistry.CuratorRegistration",
        name: "payload_",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "signature_",
        type: "bytes",
      },
    ],
    name: "isValidSignature",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "auctionHouse_",
        type: "address",
      },
      {
        internalType: "uint96",
        name: "lotId_",
        type: "uint96",
      },
      {
        internalType: "string",
        name: "ipfsCID_",
        type: "string",
      },
    ],
    name: "registerAuction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "curator",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "xId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "ipfsCID",
            type: "string",
          },
        ],
        internalType: "struct AxisMetadataRegistry.CuratorRegistration",
        name: "payload_",
        type: "tuple",
      },
      {
        internalType: "bytes",
        name: "signature_",
        type: "bytes",
      },
    ],
    name: "registerCurator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "auctionHouse_",
        type: "address",
      },
    ],
    name: "removeAuctionHouse",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "xId_",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "curator_",
        type: "address",
      },
    ],
    name: "removeCuratorAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "serviceSigner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "xId_",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "ipfsCID_",
        type: "string",
      },
    ],
    name: "updateCurator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "updateDomainSeparator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "serviceSigner_",
        type: "address",
      },
    ],
    name: "updateServiceSigner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export enum ErrorTypes {
  InvalidMongoId = 'InvalidMongoId',
}

type ErrorObject = {
  message:string,
  status:number,
};

export type ErrorCatalog = {
  [key in ErrorTypes]: ErrorObject
};

export const errorsCatalog:ErrorCatalog = {
  InvalidMongoId: {
    message: 'Id must be a 24 characters hexadecimal',
    status: 400,
  },
};

export enum ErrorTypes {
  InvalidMongoId = 'InvalidMongoId',
  EntityNotFound = 'EntityNotFound',
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
    message: 'Id must have 24 hexadecimal characters',
    status: 400,
  },
  EntityNotFound: {
    message: 'Object not found',
    status: 404,
  },
};

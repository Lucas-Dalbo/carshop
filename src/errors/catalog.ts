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
    message: 'Id must be a 24 characters hexadecimal',
    status: 400,
  },
  EntityNotFound: {
    message: 'Entity not found',
    status: 404,
  },
};

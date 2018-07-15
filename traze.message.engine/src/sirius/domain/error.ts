const makeError = (err:string) => {
  return new Error(err)
}

export default 
{
	productAlreadyExist: makeError('PRODUCT_ALREADY_EXIST')
}
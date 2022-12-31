function makeValidator(schema) {
  return (formValues) => {
    const validation = schema.safeParse(formValues);

    if (!validation.success) {
      return validation.error.issues.reduce(
        (acc, cur) => ({ ...acc, [cur.path[0]]: cur.message }),
        {}
      );
    }

    return {};
  };
}

export default makeValidator;

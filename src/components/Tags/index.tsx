type TextFieldProps = {
  brewery_type: string | null;
  postal_code: string | null;
  phone: string | null;
};

const Tags = ({ brewery_type, postal_code, phone }: TextFieldProps) => {
  return (
    <section>
      {brewery_type && (
        <div>
          <img src="/assets/brewery_type.svg" alt="Icon" />
          <span>{brewery_type}</span>
        </div>
      )}
      {postal_code && (
        <div>
          <img src="/assets/postal_code.svg" alt="Icon" />
          <span>{postal_code}</span>
        </div>
      )}
      {phone && (
        <div>
          <img src="/assets/phone.svg" alt="Icon" />
          <span>{phone}</span>
        </div>
      )}
      {/* <div>
        <img src="/assets/add_more.svg" alt="Icon" />
        <span>add more</span>
      </div> */}
    </section>
  );
};

export default Tags;

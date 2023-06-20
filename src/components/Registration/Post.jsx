function POST() {
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      const plantName = event.target.elements.name.value;
      const plantSubtitle = event.target.elements.subtitle.value;
      const plantType = event.target.elements.type.value;
      const price = event.target.elements.price.value;
      const discount = event.target.elements.discount.value;
      const label = event.target.elements.label.value;
      const features = event.target.elements.features.value;
      const description = event.target.elements.description.value;
  
      const data = {
        plantName,
        plantSubtitle,
        plantType,
        price,
        discount,
        label,
        features,
        description
      };
  
      try {
        const response = await fetch('URL_DO_SEU_ENDPOINT', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
  
        if (response.ok) {
          console.log('Dados enviados com sucesso!');
        } else {
          console.log('Falha ao enviar os dados. Por favor, tente novamente.');
        }
      } catch (error) {
        console.log('Erro ao enviar a requisição:', error);
      }
    };
  
    return (
      <div className={styles.container}>
        <div className={styles.form}>
          <form onSubmit={handleSubmit}>
          
          </form>
  
        </div>
      </div>
    );
  }
  
  export default POST;
  
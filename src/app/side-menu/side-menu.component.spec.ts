/* General Container */
.container {
  display: flex; 
  height: 100vh;
  width: 100vw;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; /* Fuente moderna y limpia */
  background-color: #f4f4f9; /* Fondo claro y neutro */
}

/* Lateral Menu */
.sidemenu-container {
  width: 280px;
  height: 100vh;
  background-color: #4a2c2a; /* Color de fondo más oscuro y elegante */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px; /* Espaciado interior para más aire */
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1); /* Sombra para dar profundidad */
}

.item {
  display: flex;
  align-items: center;
  margin-bottom: 15px; /* Espaciado entre ítems */
  padding: 10px 15px;
  border-radius: 10px; /* Bordes redondeados */
  background-color: #6C3B2A; /* Fondo de ítem con ligera diferencia */
  color: white;
  transition: background-color 0.3s, transform 0.3s; /* Efectos de transición */
}

.item:hover {
  background-color: #8C4F4A; /* Fondo de ítem en hover */
  transform: scale(1.02); /* Efecto de aumento al pasar el cursor */
}

.item img {
  width: 40px; /* Tamaño de la imagen reducido */
  height: 40px;
  border-radius: 50%;
  margin-right: 10px; /* Espacio entre imagen y texto */
}

.item span {
  font-size: 1.2rem;
}

.item p {
  font-size: 1rem;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: white;
}

/* Botones */
.btn {
  margin: 10px 0;
  padding: 12px 24px;
  font-size: 1rem;
  border-radius: 25px; /* Bordes redondeados más pronunciados */
  background-color: #0072ff; /* Fondo azul atractivo */
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s; /* Transiciones suaves */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra para el botón */
}

.btn:hover {
  background-color: #005bb5; /* Fondo más oscuro en hover */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* Sombra más intensa en hover */
}

/* Botón de regreso */
.back-button {
  display: flex;
  align-items: center;
  color: #0072ff; /* Color del texto azul */
  font-size: 1.25rem;
  transition: color 0.3s, transform 0.3s;
}

.back-button:hover {
  color: #005bb5;
  transform: scale(1.05);
}

/* Contenido Principal */
.main-content {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.main-content h1 {
  font-size: 3.5rem; /* Tamaño ajustado para una mejor visualización */
  color: #333; /* Color de texto más oscuro */
  opacity: 0.9;
  text-align: center; /* Alineación centrada */
}

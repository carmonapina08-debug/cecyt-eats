// src/servicios/api.js 
// ───────────────────────────────────────────────────────────────────── 
// Archivo centralizado de llamadas a la API REST (servidor Node + MySQL) 
// ───────────────────────────────────────────────────────────────────── 
  
const URL_BASE = 'http://localhost:3001/api'; 
  
  
// ══════════════════════════════════════════════════════════════════════ 
// USUARIOS 
// ══════════════════════════════════════════════════════════════════════ 
  
export const registrarUsuario = async (datos) => { 
  try { 
    const res = await fetch(`${URL_BASE}/usuarios/registro`, { 
      method:  'POST', 
      headers: { 'Content-Type': 'application/json' }, 
      body:    JSON.stringify(datos), 
    }); 
    return await res.json(); 
  } catch (err) { 
    return { error: 'No se pudo conectar al servidor. Verifica que esté corriendo.' }; 
  } 
}; 
  
export const iniciarSesion = async (datos) => { 
  try { 
    const res = await fetch(`${URL_BASE}/usuarios/login`, { 
      method:  'POST', 
      headers: { 'Content-Type': 'application/json' }, 
      body:    JSON.stringify(datos), 
    }); 
    return await res.json(); 
  } catch (err) { 
    return { error: 'No se pudo conectar al servidor. Verifica que esté corriendo.' }; 
  } 
}; 
  
  
// ══════════════════════════════════════════════════════════════════════ 
// PRODUCTOS 
// ══════════════════════════════════════════════════════════════════════ 
  
export const obtenerProductos = async () => { 
  try { 
    const res = await fetch(`${URL_BASE}/productos`); 
    return await res.json(); 
  } catch (err) { 
    return []; 
  } 
}; 
  
export const crearProducto = async (datos) => { 
  try { 
    const res = await fetch(`${URL_BASE}/productos`, { 
      method:  'POST', 
      headers: { 'Content-Type': 'application/json' }, 
      body:    JSON.stringify(datos), 
    }); 
    return await res.json(); 
  } catch (err) { 
    return { error: err.message }; 
  } 
}; 
  
export const editarProducto = async (id, datos) => { 
  try { 
    const res = await fetch(`${URL_BASE}/productos/${id}`, { 
      method:  'PUT', 
      headers: { 'Content-Type': 'application/json' }, 
      body:    JSON.stringify(datos), 
    }); 
    return await res.json(); 
  } catch (err) { 
    return { error: err.message }; 
  } 
}; 
  
export const eliminarProducto = async (id) => { 
  try { 
    const res = await fetch(`${URL_BASE}/productos/${id}`, { 
      method: 'DELETE', 
    }); 
    return await res.json(); 
  } catch (err) { 
    return { error: err.message }; 
  } 
}; 
  
  
// ══════════════════════════════════════════════════════════════════════ 
// PEDIDOS 
// ══════════════════════════════════════════════════════════════════════ 
  
export const crearPedido = async (datos) => { 
  try { 
    const res = await fetch(`${URL_BASE}/pedidos`, { 
      method:  'POST', 
      headers: { 'Content-Type': 'application/json' }, 
      body:    JSON.stringify(datos), 
    }); 
    return await res.json(); 
  } catch (err) { 
    return { error: err.message }; 
  } 
}; 
  
export const obtenerPedidos = async () => { 
  try { 
    const res = await fetch(`${URL_BASE}/pedidos`); 
    return await res.json(); 
  } catch (err) { 
    return []; 
  } 
}; 
  
export const actualizarEstadoPedido = async (id, estado_pedido) => { 
  try { 
    const res = await fetch(`${URL_BASE}/pedidos/${id}/estado`, { 
      method:  'PATCH', 
      headers: { 'Content-Type': 'application/json' }, 
      body:    JSON.stringify({ estado_pedido }), 
    }); 
    return await res.json(); 
  } catch (err) { 
    return { error: err.message }; 
  } 
};
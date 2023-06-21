export function calculateTax(salary: number) {
    if (salary < 18201) return 0;
  
    if (salary < 37001) return (salary - 18200) * 0.19;
  
    if (salary < 90001) return (salary - 37000) * 0.325 + 3572;
  
    if (salary < 180001) return (salary - 90000) * 0.37 + 20797;
  
    return (salary - 180000) * 0.45 + 54097;
  }
  
  export function calculateSuper(salary: number) {
    return (salary * 10.5) / 100;
  }
  
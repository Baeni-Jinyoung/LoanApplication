import { calculateMonthlyPayment, validateLoanApplication } from '../src/utils';
import { LoanApplication } from '../database/LoanApplication';

describe('Loan Application Tests', () => {
  describe('calculateMonthlyPayment', () => {
    it('should calculate the monthly payment correctly', () => {
      const loanAmount = 10000;
      const interestRate = 5;
      const loanTerm = 2;

      const monthlyPayment = calculateMonthlyPayment(loanAmount, interestRate, loanTerm);
      const expectedPayment = 438.71;
      expect(monthlyPayment).toBeCloseTo(expectedPayment, 2);
    });
  });

  describe('validateLoanApplication', () => {
    it('should validate the loan application correctly', () => {
      const validLoanApplication: LoanApplication = {
        id: 5,
        name: 'Phoebe',
        amount: 25000,
        type: 'personal',
        income: 50000,
        interestRate: 5
      };

      const validationResult = validateLoanApplication(validLoanApplication);

      expect(validationResult).toEqual({ valid: true });
    });

    it('should return an error message for invalid loan application', () => {
      const invalidLoanApplication: LoanApplication = {
        id:2,
        name: '',
        amount: 25000,
        type: 'personal',
        income: 50000,
        interestRate: 5
      };

      const validationResult = validateLoanApplication(invalidLoanApplication);

      expect(validationResult).toEqual({
        valid: false,
        message: 'Bad Request: Missing required fields'
      });
    });
  });
});


describe('validateLoanApplication', () => {
  it('should fail validation for invalid loan amount', () => {
    const loanApplication: LoanApplication = {
      id:1,
      name: 'Phoebe',
      amount: 999,
      type: 'personal',
      income: 30000,
      interestRate: 5
    };

    const validationResult = validateLoanApplication(loanApplication);
    expect(validationResult.valid).toBe(false);
    expect(validationResult.message).toBe('Bad Request: Loan amount out of limits');
  });

  it('should fail validation for invalid interest rate', () => {
    const loanApplication: LoanApplication = {
      id: 3,
      name: 'Phoebe',
      amount: 20000,
      type: 'personal',
      income: 50000,
      interestRate: 31 
    };

    const validationResult = validateLoanApplication(loanApplication);
    expect(validationResult.valid).toBe(false);
    expect(validationResult.message).toBe('Bad Request: Interest rate out of limits');
  });

});

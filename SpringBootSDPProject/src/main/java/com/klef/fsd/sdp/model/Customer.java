package com.klef.fsd.sdp.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="customer_table")
public class Customer {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="customer_id")
    private int id;
    @Column(name="customer_name",length = 50,nullable = false)
    private String name;
    @Column(name="customer_gender",length = 10,nullable = false)
    private String gender;
    @Column(name="customer_dob",length = 20,nullable = false)
    private String dob;
    @Column(name="customer_email",length = 50,nullable = false,unique=true)
    private String email;
    @Column(name="customer_uname",length = 50,nullable = false,unique=true)
    private String username;
    @Column(name="customer_pwd",length = 50,nullable = false)
    private String password;
    @Column(name="customer_mobileno",length = 20,nullable = false,unique=true)
    private String mobileno;
    @Column(name="customer_location",length = 50,nullable = false)
    private String location;

    @Column(name="medical_conditions", length=255)
    private String medicalConditions; // comma separated

    @Column(name="allergies", length=255)
    private String allergies; // comma separated

    @Column(name="current_medications", length=255)
    private String currentMedications; // comma separated

    @Column(name="recent_blood_pressure", length=20)
    private String recentBloodPressure;

    @Column(name="recent_heart_rate", length=20)
    private String recentHeartRate;

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getMobileno() {
		return mobileno;
	}
	public void setMobileno(String mobileno) {
		this.mobileno = mobileno;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}

    public String getMedicalConditions() {
        return medicalConditions;
    }

    public void setMedicalConditions(String medicalConditions) {
        this.medicalConditions = medicalConditions;
    }

    public String getAllergies() {
        return allergies;
    }

    public void setAllergies(String allergies) {
        this.allergies = allergies;
    }

    public String getCurrentMedications() {
        return currentMedications;
    }

    public void setCurrentMedications(String currentMedications) {
        this.currentMedications = currentMedications;
    }

    public String getRecentBloodPressure() {
        return recentBloodPressure;
    }

    public void setRecentBloodPressure(String recentBloodPressure) {
        this.recentBloodPressure = recentBloodPressure;
    }

    public String getRecentHeartRate() {
        return recentHeartRate;
    }

    public void setRecentHeartRate(String recentHeartRate) {
        this.recentHeartRate = recentHeartRate;
    }
}
